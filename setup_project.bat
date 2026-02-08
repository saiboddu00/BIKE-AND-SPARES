@echo off
echo Creating assets directory...
if not exist "public\assets" mkdir "public\assets"

echo Copying images...
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\hero_mechanic_1770198989055.png" "public\assets\hero_mechanic.png"
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\tool_spanner_set_1770199009677.png" "public\assets\tool_spanner_set.png"
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\engine_piston_kit_1770199029057.png" "public\assets\engine_piston_kit.png"
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\elec_headlight_1770199045242.png" "public\assets\elec_headlight.png"
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\brake_disc_pads_1770199064092.png" "public\assets\brake_disc_pads.png"
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\tyre_tube_tyre_1770199082321.png" "public\assets\tyre_tube_tyre.png"
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\oil_engine_1770199098922.png" "public\assets\oil_engine.png"
copy /Y "C:\Users\Admin\.gemini\antigravity\brain\ae7b1a4e-7eb3-42cc-b301-c85e11a51002\acc_helmet_1770199157446.png" "public\assets\acc_helmet.png"

echo.
echo Images copied successfully!
echo.
echo Installing dependencies...
call npm install
echo.
echo Setup complete! Run 'npm run dev' to start the website.
pause
