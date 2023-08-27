
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGallerry({images}) {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {images.map((item) => (
        <ImageListItem  key={item}>
          <img
            src={item}
            srcSet={{item}}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

