import { Paragraph } from '@bottlesteam/ui';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BottleImage from '../../assets/bottles.png';

export function Header() {
  return (
    <>
      <div style={{ marginTop: '60px', marginBottom: '50px' }}>
        <Paragraph color="purple400" asChild>
          <h3 style={{ fontSize: '19px', fontWeight: 700, whiteSpace: 'pre-line' }}>
            {'"연애 상담 잘하는 상담사는, \n 어떻게 찾아야 할까요?"'}
          </h3>
        </Paragraph>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ marginBottom: '15px' }}
      >
        <Paragraph color="purple500" asChild>
          <h1 style={{ fontSize: '50px', fontWeight: 800, color: '#4E65F1' }}>Bottle</h1>
        </Paragraph>
      </motion.div>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        <Paragraph color="purple400" asChild>
          <h3 style={{ marginBottom: '30px', fontSize: '19px', fontWeight: 700, color: '#8489FC' }}>
            너에게 보내는 편지
          </h3>
        </Paragraph>
        <Image src={BottleImage} priority alt="사랑의 병" width={350} height={280} />
      </motion.div>
    </>
  );
}
