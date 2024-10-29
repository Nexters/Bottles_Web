import { Stepper } from '@/components/common/stepper';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ImageGuide } from './ImageGuide';
import { Item2 } from './Item2';
import { Item3 } from './Item3';
import { embla, emblaContainer, emblaSlide } from './imagesStyle.css';

const CAROUSEL_LENGTH = 3;

export function ExampleCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5 * 1000 })]);

  return (
    <section style={{ marginTop: '38px' }}>
      <div className={embla} ref={emblaRef}>
        <div className={emblaContainer}>
          <div className={emblaSlide}>
            <Stepper current={1} max={CAROUSEL_LENGTH} style={{ marginTop: 0 }} />
            <ImageGuide />
          </div>
          <div className={emblaSlide}>
            <Stepper current={2} max={CAROUSEL_LENGTH} style={{ marginTop: 0 }} />
            <Item2 />
          </div>
          <div className={emblaSlide}>
            <Stepper current={3} max={CAROUSEL_LENGTH} style={{ marginTop: 0 }} />
            <Item3 />
          </div>
        </div>
      </div>
    </section>
  );
}
