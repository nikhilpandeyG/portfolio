@echo off
echo ========================================
echo Profile Photo Setup Instructions
echo ========================================
echo.
echo Please follow these steps to add your professional photo:
echo.
echo 1. Locate your professional photo (the one you just uploaded)
echo.
echo 2. Copy or move it to this exact location:
echo    C:\Users\nikhi\OneDrive\Desktop\Development\Portfolio\public\images\profile.jpg
echo.
echo 3. Make sure the filename is exactly: profile.jpg
echo.
echo 4. After copying, run: npm run build
echo    (or just refresh your dev server if it's running)
echo.
echo 5. Commit and push the changes:
echo    git add public/images/profile.jpg
echo    git commit -m "Add professional profile photo"
echo    git push
echo.
echo ========================================
echo Alternative: Open the folder now?
echo ========================================
pause
explorer "C:\Users\nikhi\OneDrive\Desktop\Development\Portfolio\public\images"
