import React from 'react';
import { CharCollectionEntity } from '@/pods/rest-api';
import './character-color.styles.css';

export const setColor = (char: CharCollectionEntity) => {
  switch (char.status) {
    case 'Alive':
      return <div className="status-alive">{char.status}</div>;
    case 'Dead':
      return <div className="status-dead">{char.status}</div>;
    case 'unknow':
      return <div className="status-unknown">{char.status}</div>;
    default:
      return <div className="status-other">{char.status}</div>;
  }
};
