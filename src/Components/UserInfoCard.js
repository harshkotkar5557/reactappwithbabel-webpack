import React from 'react';
import EmphasizedText from './EmphasizedText';
import { checkInclusion } from '../Utils/Texthelper';


const UserInfoCard = ({ user: { name, address, pincode, items, id}, searchInputText }) => (
  <div className='user-info-card'>
    <EmphasizedText text={id} searchInputText={searchInputText} tagName="h4" />
    <EmphasizedText text={name} searchInputText={searchInputText} tagName="h1" />
    <EmphasizedText text={pincode} searchInputText={searchInputText} tagName="p" />
    <ul>
      {searchInputText &&
        items.map((item, i) => {
          const isIncluded = checkInclusion(item, searchInputText)
          return isIncluded && <EmphasizedText key={i} text={isIncluded} searchInputText={searchInputText} tagName="li" />
        })}
    </ul>
    <EmphasizedText text={address} searchInputText={searchInputText} tagName="p" />
  </div>
);

export default UserInfoCard;
