import React from 'react';
import Socials from './Socials';

export default function InfoTile(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66];

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <Socials/>
            </div>
        </div>
        <div className='row'>
            {arr.map((num) => (
                <div key={{ num }} className='col-12'>
                    Recent Post # {num}
                </div>
            ))}
        </div>
        <div className='row'>
            {arr.map((num) => (
                <div key={{ num }} className='col-6'>
                    Tag#{num}
                </div>
            ))}
        </div>
    </div>
  );
}
