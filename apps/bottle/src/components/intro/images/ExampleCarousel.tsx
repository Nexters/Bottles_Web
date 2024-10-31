'use client';

import { Stepper } from '@/components/common/stepper';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { debounce } from 'es-toolkit';
import { useEffect, useState } from 'react';
import { ImageGuide } from './ImageGuide';
import { Item2 } from './Item2';
import { Item3 } from './Item3';
import { embla, emblaContainer, emblaSlide, newEmbla, newEmblaContainer } from './imagesStyle.css';

const CAROUSEL_LENGTH = 3;
type CAROUSEL_STEPS = 0 | 1 | 2;

export function ExampleCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2 * 1000 })]);
  const [currentStep, setCurrentStep] = useState<CAROUSEL_STEPS>(0);

  useEffect(() => {
    if (emblaApi == null) {
      return;
    }
    const handleStepChange = debounce(
      () => {
        setCurrentStep(emblaApi.selectedScrollSnap() as CAROUSEL_STEPS);
      },
      10,
      { edges: ['leading'] }
    );
    emblaApi?.on('init', handleStepChange);
    emblaApi?.on('scroll', handleStepChange);
    emblaApi?.on('select', handleStepChange);
  }, [emblaApi]);

  return (
    <section style={{ marginTop: '38px' }}>
      <div className={embla}>
        <div className={emblaContainer}>
          <Stepper current={currentStep + 1} max={CAROUSEL_LENGTH} style={{ marginTop: 0 }} />
          <div className={newEmbla} ref={emblaRef}>
            <div className={newEmblaContainer}>
              <div className={emblaSlide}>
                <ImageGuide />
              </div>
              <div className={emblaSlide}>
                <Item2 />
              </div>
              <div className={emblaSlide}>
                <Item3 />
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </section>
  );
}
