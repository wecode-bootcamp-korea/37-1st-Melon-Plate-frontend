import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Slide.scss';

const Slide = () => {
  const IMAGE_DATAS = useRef([
    {
      id: '1',
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfNzAg%2FMDAxNjE3MDcxNTIwMTk2.rthUlGA-zS81dh9Ey7perhpoArElzxHGij0ov06MMugg.SWoX76VwQfmfaixRUfdriW9zQeSNqO65-QbnMGJ7AC4g.JPEG.co3187%2FIMG_8809.jpg&type=a340',
    },
    {
      id: '2',
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfNzAg%2FMDAxNjE3MDcxNTIwMTk2.rthUlGA-zS81dh9Ey7perhpoArElzxHGij0ov06MMugg.SWoX76VwQfmfaixRUfdriW9zQeSNqO65-QbnMGJ7AC4g.JPEG.co3187%2FIMG_8809.jpg&type=a340',
    },
    {
      id: '3',
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfNzAg%2FMDAxNjE3MDcxNTIwMTk2.rthUlGA-zS81dh9Ey7perhpoArElzxHGij0ov06MMugg.SWoX76VwQfmfaixRUfdriW9zQeSNqO65-QbnMGJ7AC4g.JPEG.co3187%2FIMG_8809.jpg&type=a340',
    },
    {
      id: '4',
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfNzAg%2FMDAxNjE3MDcxNTIwMTk2.rthUlGA-zS81dh9Ey7perhpoArElzxHGij0ov06MMugg.SWoX76VwQfmfaixRUfdriW9zQeSNqO65-QbnMGJ7AC4g.JPEG.co3187%2FIMG_8809.jpg&type=a340',
    },
    {
      id: '5',
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfNzAg%2FMDAxNjE3MDcxNTIwMTk2.rthUlGA-zS81dh9Ey7perhpoArElzxHGij0ov06MMugg.SWoX76VwQfmfaixRUfdriW9zQeSNqO65-QbnMGJ7AC4g.JPEG.co3187%2FIMG_8809.jpg&type=a340',
    },
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(IMAGE_DATAS.current.length);

  const moveSlide = i => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <div className="slideWrap">
      <div className="slide">
        <div
          className="btn"
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </div>
        <div className="window">
          <div className="flexbox" style={style}>
            {IMAGE_DATAS.current.map((img, i) => (
              <div
                key={i}
                className="img"
                style={{ backgroundImage: `url(${img.url})` }}
              />
            ))}
          </div>
        </div>
        <div
          className="btn"
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </div>
      </div>
      <div className="position">
        {IMAGE_DATAS.current.map((x, i) => (
          <div key={i} className={i === current ? 'dot current' : 'dot'} />
        ))}
      </div>
    </div>
  );
};
export default Slide;
