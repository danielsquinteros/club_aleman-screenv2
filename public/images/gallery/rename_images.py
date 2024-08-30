import os
import re

# Set the path to the current directory
folder_path = '.'

# Rest of the script remains the same
image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]
image_files.sort()

for index, filename in enumerate(image_files, start=1):
    file_extension = os.path.splitext(filename)[1]
    new_filename = f'image-{index}{file_extension}'
    old_file = os.path.join(folder_path, filename)
    new_file = os.path.join(folder_path, new_filename)
    os.rename(old_file, new_file)
    print(f'Renamed: {filename} -> {new_filename}')

print('Renaming complete!')