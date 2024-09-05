import React from 'react';
import { Button } from '@/components/ui/button';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onClear: () => void;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ onKeyPress, onBackspace, onClear }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="grid grid-cols-3 gap-2">
      {keys.map((key) => (
        <Button type='button' key={key} onClick={() => onKeyPress(key)} variant="outline" size="sm">
          {key}
        </Button>
      ))}
      <Button type='button' onClick={onBackspace} variant="outline" size="sm">
        Backspace
      </Button>
      <Button type='button' onClick={onClear} variant="outline" size="sm">
        Clear
      </Button>
    </div>
  );
};

export default VirtualKeyboard;