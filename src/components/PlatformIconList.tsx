import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons/lib/esm/iconBase";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import Platform from "../entities/Platform";

interface IconProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: IconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
