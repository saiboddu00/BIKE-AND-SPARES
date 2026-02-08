import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const sourceDir = 'C:/Users/Admin/.gemini/antigravity/brain/ae7b1a4e-7eb3-42cc-b301-c85e11a51002';
const destDir = 'c:/Users/Admin/Desktop/Auto moblie/public/assets';

const mapping = {
    'hero_mechanic_1770198989055.png': 'hero_mechanic.png',
    'tool_spanner_set_1770199009677.png': 'tool_spanner_set.png',
    'engine_piston_kit_1770199029057.png': 'engine_piston_kit.png',
    'elec_headlight_1770199045242.png': 'elec_headlight.png',
    'brake_disc_pads_1770199064092.png': 'brake_disc_pads.png',
    'tyre_tube_tyre_1770199082321.png': 'tyre_tube_tyre.png',
    'oil_engine_1770199098922.png': 'oil_engine.png',
    'acc_helmet_1770199157446.png': 'acc_helmet.png'
};

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

Object.entries(mapping).forEach(([src, dest]) => {
    const srcPath = path.join(sourceDir, src);
    const destPath = path.join(destDir, dest);
    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${src} to ${dest}`);
    } catch (err) {
        console.error(`Error copying ${src}: ${err.message}`);
    }
});
