// import { useRouter } from 'next/router'
// import { getTweet, type Tweet } from 'react-tweet/api'
// import { EmbeddedTweet, TweetSkeleton } from 'react-tweet'
 
// export async function getStaticProps({
//   params,
// }: {
//   params: { tweet: string }
// }) {
//   const tweetId = params.tweet
 
//   try {
//     const tweet = await getTweet(tweetId)
//     return tweet ? { props: { tweet } } : { notFound: true }
//   } catch (error) {
//     return { notFound: true }
//   }
// }
 
// export async function getStaticPaths() {
//   return { paths: [], fallback: true }
// }
 
// export default function Page({ tweet }: { tweet: Tweet }) {
//   const { isFallback } = useRouter()
//   return isFallback ? <TweetSkeleton /> : <EmbeddedTweet tweet={tweet} />
// }


// import { Suspense } from 'react';
// import { EmbeddedTweet, TweetSkeleton, TweetNotFound } from 'react-tweet';
// import { getTweet } from 'react-tweet/api';

// interface TweetPageProps {
//   tweet?: any; // Adjust type based on tweet data structure
// }

// const Page: React.FC<TweetPageProps> = ({ tweet }) => {
//   return (
//     <Suspense fallback={<TweetSkeleton />}>
//       {tweet ? (
//         <EmbeddedTweet tweet={tweet} />
//       ) : (
//         <TweetNotFound />
//       )}
//     </Suspense>
//   );
// };

// // ... (getStaticProps function will be added below)

// export async function getStaticProps({ params }: { params: { tweet: string } }) {
//   try {
//     const tweet = await getTweet(params.tweet); // Assuming `getTweet` is defined elsewhere
//     return {
//       props: {
//         tweet,
//       },
//       revalidate: 60, // Revalidate data every 60 seconds (optional)
//     };
//   } catch (error) {
//     console.error('Error fetching tweet:', error);
//     return {
//       notFound: true,
//     };
//   }
// }

// export default Page;


import { tweetIds } from '@/lib/utils';
import { EmbeddedTweet, TweetProps } from 'react-tweet';
import { getTweet } from 'react-tweet/api';


// ...
interface TweetPageProps {
  tweets: TweetProps[];
}

export async function getStaticProps() {
  const tweets = await Promise.all(tweetIds.map(async (id) => getTweet(id)));

  return {
    TweetPageProps: {
      tweets,
    },
    revalidate: 60, // Revalidate data every 60 seconds (optional)
  };
}

