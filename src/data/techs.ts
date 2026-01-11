import { TechType } from '../types/TechType';
import { RiReactjsLine } from 'react-icons/ri';
import { SiSpring } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { RiJavascriptLine } from 'react-icons/ri';
import { SiJest } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

export const techs: TechType[] = [
    { index: 0, icon: FaNodeJs, style: 'max-md:text-2xl text-green-500' },
    { index: 1, icon: FaJava, style: 'text-red-800' },
    { index: 2, icon: RiReactjsLine, style: 'text-cyan-400' },
    {
        index: 3,
        icon: BiLogoTypescript,
        style: 'max-md:text-2xl text-blue-800',
    },
    { index: 4, icon: SiMysql, style: 'max-md:text-2xl text-gray-600' },
    { index: 5, icon: SiSpring, style: 'max-md:text-2xl text-green-400' },
    { index: 6, icon: FaGitAlt, style: 'max-md:text-2xl text-orange-400' },
    {
        index: 7,
        icon: RiJavascriptLine,
        style: 'max-md:text-2xl text-yellow-300',
    },
    { index: 8, icon: SiJest, style: 'max-md:text-2xl text-red-500' },
    { index: 9, icon: SiMongodb, style: 'max-md:text-2xl text-green-500' },
    {
        index: 10,
        icon: BiLogoPostgresql,
        style: 'max-md:text-2xl text-sky-700',
    },
];
