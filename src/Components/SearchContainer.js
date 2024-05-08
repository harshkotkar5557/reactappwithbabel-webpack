import React from 'react';
import UserInfoCard from './UserInfoCard';

const SearchContainer = React.forwardRef(
  (
    { user, searchInputText, isActive, onMouseEnter, onMouseLeave, onMouseMove, className },
    ref
  ) => (
    <div
      ref={ref}
      className={`${isActive ? 'active' : ''} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <UserInfoCard user={user} searchInputText={searchInputText} />
    </div>
  )
);

export default SearchContainer;
