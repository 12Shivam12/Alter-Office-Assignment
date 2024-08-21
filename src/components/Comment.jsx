
import React, { useState } from 'react';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';
import { v4 as uuidv4 } from 'uuid';

const AdvancedComponent = ({ user }) => {
  const [data] = useState([
    {
      userId: uuidv4(),
      comId: uuidv4(),
      fullName: user.displayName, 
      avatarUrl: user.photoURL || 'https://ui-avatars.com/api/name=User&background=random', 
      userProfile: user.email, 
      text: 'Hey, Loved your blog!',
      replies: [
        {
          userId: uuidv4(),
          comId: uuidv4(),
          fullName: 'Lily',
          userProfile: user.email, 
          text: 'I have a doubt about the 4th point🤔',
          avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
          replies: [],
        },
      ],
    },
  ]);

  return (
    <div>
      <CommentSection
        currentUser={{
          currentUserId: user.uid,
          currentUserImg: user.photoURL || 'https://ui-avatars.com/api/name=User&background=random',
          currentUserProfile: user.email,
          currentUserFullName: user.displayName,
        }}
        advancedInput={true}
        hrStyle={{ border: '0.5px solid #ff0072' }}
        commentData={data}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/',
        }}
        customImg='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60'
        inputStyle={{ border: '1px solid rgb(208 208 208)' }}
        formStyle={{ backgroundColor: 'white' }}
        submitBtnStyle={{
          border: '1px solid black',
          backgroundColor: 'black',
          padding: '7px 15px',
        }}
        cancelBtnStyle={{
          border: '1px solid gray',
          backgroundColor: 'gray',
          color: 'white',
          padding: '7px 15px',
        }}
        replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }}
      />
    </div>
  );
};

export default AdvancedComponent;
