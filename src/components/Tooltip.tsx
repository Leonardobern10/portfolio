import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';

type TooltipProps = {
    children: ReactNode;
    text: string;
    hover?: boolean;
    pos?: 'top' | 'left' | 'right' | 'bottom';
    size?: 'small' | 'medium' | 'large';
};

export default function Tooltip({
    children,
    text,
    hover,
    pos = 'bottom',
    size = 'small',
}: TooltipProps) {
    const [mostrar, setMostrar] = useState(false);
    const setPos =
        pos === 'left'
            ? 'right-20'
            : pos === 'right'
              ? 'left-20'
              : pos === 'top'
                ? 'bottom-10'
                : pos === 'bottom'
                  ? 'top-10'
                  : 'bottom-10';

    const setSize =
        size === 'large'
            ? 'text-lg'
            : size === 'medium'
              ? 'text-dm'
              : 'text:sm';
    return (
        <div className="relative inline-block">
            {mostrar && (
                <div
                    className={`font-sans tracking-wide absolute ${setPos} left-1/2 bg-neutral-500/80 text-neutral-200 px-3 py-1.5 rounded ${setSize}`}>
                    {text}
                </div>
            )}

            <motion.div
                whileHover={hover ? { scale: 1.1 } : undefined}
                onHoverStart={() => setMostrar(true)}
                onHoverEnd={() => setMostrar(false)}
                className="p-4">
                {children}
            </motion.div>
        </div>
    );
}
