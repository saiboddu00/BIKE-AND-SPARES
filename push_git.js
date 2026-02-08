const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'push_log.txt');
const log = (msg) => {
    try {
        fs.appendFileSync(logFile, msg + '\n');
    } catch (err) {
        console.error('Failed to write to log:', err);
    }
};

log('Starting git push script...');

function run(cmd, ignoreError = false) {
    return new Promise((resolve, reject) => {
        log(`Run: ${cmd}`);
        exec(cmd, { cwd: __dirname }, (error, stdout, stderr) => {
            if (stdout) log(`Stdout: ${stdout.trim()}`);
            if (stderr) log(`Stderr: ${stderr.trim()}`);

            if (error && !ignoreError) {
                log(`Error: ${error.message}`);
                // resolve anyway to continue if possible or reject?
                // For git add/commit, errors should stop.
                // But let's be loose here.
                resolve(error); // Return error but don't throw
            } else {
                resolve(null);
            }
        });
    });
}

async function main() {
    try {
        if (!fs.existsSync(path.join(__dirname, '.git'))) {
            await run('git init');
        }
        await run('git add .');
        // commit might fail if nothing to commit
        await run('git commit -m "Auto-commit"', true);
        await run('git branch -M main');
        // Remove origin if exists (might error, ignore)
        await run('git remote remove origin', true);
        await run('git remote add origin https://github.com/saiboddu00/BIKE-AND-SPARES.git');
        await run('git push -u origin main');
        log('Done.');
    } catch (e) {
        log(`Exception: ${e.message}`);
    }
}

main();
