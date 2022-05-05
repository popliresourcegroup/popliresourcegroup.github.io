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

# i=0
# for file in `find /Users/anirudhka/foobar/nidhi_studio/raw_data/exhibitions -type file` ; do
#     filename=`basename "$file"`
#     foldername=`dirname "$file"`
#     i=$(( i+1 ))
#     docker run -v "$foldername":/imgs dpokidov/imagemagick "/imgs/$filename" -resize 1200x1200\> -strip -interlace Plane -gaussian-blur 0.05 -quality 85% /imgs/exhibitions_`basename "$foldername"`_$i.jpg
# done
# find . -name "*exhibitions*" | xargs -I{} -n1 mv {} /Users/anirudhka/foobar/nidhi_studio/nidhi-studio.github.io/uploads 