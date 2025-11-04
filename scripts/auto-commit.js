#!/usr/bin/env node

/**
 * Auto-commit script that watches for file changes and automatically
 * commits and pushes to GitHub
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Debounce function to prevent too many commits
let commitTimeout;
let pendingChanges = new Set();

function getTimestamp() {
  return new Date().toISOString().replace(/T/, ' ').substring(0, 19);
}

function commitAndPush(changedFiles) {
  try {
    console.log(`\n🔄 Auto-committing changes at ${getTimestamp()}...`);
    
    // Stage all changes
    execSync('git add -A', { stdio: 'inherit', cwd: process.cwd() });
    
    // Create commit message with changed files
    const filesList = Array.from(changedFiles).slice(0, 5).join(', ');
    const commitMessage = `Auto-save: ${filesList}${changedFiles.size > 5 ? '...' : ''} - ${getTimestamp()}`;
    
    // Commit changes
    execSync(`git commit -m "${commitMessage}"`, { 
      stdio: 'inherit', 
      cwd: process.cwd() 
    });
    
    // Push to GitHub
    console.log('📤 Pushing to GitHub...');
    execSync('git push origin main', { 
      stdio: 'inherit', 
      cwd: process.cwd() 
    });
    
    console.log('✅ Successfully saved to GitHub!\n');
    pendingChanges.clear();
  } catch (error) {
    // Ignore errors if there are no changes to commit
    if (error.message.includes('nothing to commit')) {
      console.log('ℹ️  No changes to commit');
      pendingChanges.clear();
    } else {
      console.error('❌ Error auto-committing:', error.message);
    }
  }
}

function watchForChanges() {
  console.log('👀 Watching for file changes...');
  console.log('📝 Any changes will be automatically saved to GitHub');
  console.log('⏹️  Press Ctrl+C to stop\n');
  
  // Watch for changes in key directories
  const watchDirs = [
    'app',
    'components',
    'public',
    '*.tsx',
    '*.ts',
    '*.js',
    '*.css',
    '*.json'
  ];
  
  // Use a simple polling mechanism since we don't want to add heavy dependencies
  let lastCheck = Date.now();
  const checkInterval = 3000; // Check every 3 seconds
  
  setInterval(() => {
    try {
      // Check git status for changes
      const status = execSync('git status --porcelain', { 
        encoding: 'utf8',
        cwd: process.cwd() 
      }).trim();
      
      if (status) {
        // Get list of changed files
        const changedFiles = status
          .split('\n')
          .map(line => line.substring(3).trim())
          .filter(file => file && !file.includes('node_modules') && !file.includes('.next'));
        
        changedFiles.forEach(file => pendingChanges.add(path.basename(file)));
        
        // Debounce commits (wait 5 seconds after last change)
        clearTimeout(commitTimeout);
        commitTimeout = setTimeout(() => {
          commitAndPush(pendingChanges);
        }, 5000);
      }
    } catch (error) {
      // Ignore errors during status check
    }
  }, checkInterval);
}

// Start watching
watchForChanges();

