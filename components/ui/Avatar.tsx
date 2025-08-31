import React from 'react';

// أولاً نعرف نوع Props
interface AvatarProps {
  name: string;
  role: string;
  img?: string; // اختياري لتخصيص اللون
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  role,
  img = 'img',
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-9 h-9 rounded-full border border-white/10 flex justify-center items-center"
      >{img}</div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-[10px] opacity-60">{role}</div>
      </div>
    </div>
  )
}

export default Avatar;