extpath=`realpath "$1"`
watermarkfile=`realpath "$2"`
echo "Automatically resize and watermark all images in location $extpath, with watermark file $watermarkfile? (CTR+C to exit, press any key to continue)"
read delme
for folder in "$extpath"/* ; do
    foldername=`basename "$folder"`
    previewimage=`echo "$folder/$foldername"*`
    if [[ ! -z "$previewimage" ]] ; then
        imagename=`basename "$previewimage"`
        imagename_noext="${imagename%.*}"
        mkdir "$folder/autogen"
        cp "$watermarkfile" "$folder/autogen/watermark.png"
        docker run -v "$folder":/imgs dpokidov/imagemagick "/imgs/$imagename" -resize 300x300\> -quality 85% /imgs/autogen/"$imagename_noext"_preview.jpg
        docker run -v "$folder":/imgs dpokidov/imagemagick "/imgs/$imagename" -resize 1200x1200\> /imgs/autogen/watermark.png -gravity center -composite -quality 85% /imgs/autogen/"$imagename_noext"_wm.jpg
        rm "$folder/autogen/watermark.png"
    else
        echo "ERROR: No $foldername* file in $folder"
    fi
done

#cp -f **/autogen/* ../../nidhi-studio.github.io/uploads