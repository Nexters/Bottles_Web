import { motion } from 'framer-motion';
import Image from 'next/image';
import BottleImage from '../../assets/bottles.png';

export function Header() {
  return (
    <>
      <div style={{ marginTop: '60px', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#8489FC' }}>{'"인연을 찾는 가장 빠르고 쉬운 방법"'}</h3>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ marginBottom: '15px' }}
      >
        <h1 style={{ fontSize: '50px', fontWeight: 800, color: '#4E65F1' }}>Bottle</h1>
      </motion.div>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        <h3 style={{ marginBottom: '30px', fontSize: '19px', fontWeight: 700, color: '#8489FC' }}>
          너에게 보내는 편지
        </h3>
        <Image src={BottleImage} priority alt="사랑의 병" width={350} height={280} />
      </motion.div>
    </>
  );
}
