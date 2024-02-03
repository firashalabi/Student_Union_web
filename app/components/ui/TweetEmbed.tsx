// import React from 'react';
// import Tweet from 'react-tweet';
 

// interface TweetEmbedProps {
//   tweetId: string;
// }

// export const TweetEmbed: React.FC<TweetEmbedProps> = ({ tweetId }) => {
//   return (<Tweet id={tweetId} />);
// };

import Image from 'next/image'
import {  type TwitterComponents } from 'react-tweet'

 
export const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,

  
}


