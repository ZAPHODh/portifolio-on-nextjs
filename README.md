# PORTFOLIO-ON-NEXT

A portfolio's template made with Next.js and styled-components.

## Installation

first of all, you must [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repository.

```bash
git clone https://github.com/ZAPHODh/portifolio-on-nextjs
```

## Usage

in the folder **src/config/** we have some archives who simulate an data from an API REST. You must change the values to one who are properly associate to you.

For example, the file **ProfileData.ts**
```javascript

export const profileData: ProfileProps = {
  name: 'put your name here',// U need to change to your name
  photo:
    ' your src here', // u need to put a web src to your profile pic
  description:
    ' your description', // your description
  socialMedia: [
    // u can crete how much object for your social media u want, but take care about the shape.
    {
      redeName: 'Linkedin', //socialmedia name
      icon: 'https://img.icons8.com/color/48/000000/linkedin-circled--v1.png', // src of icon. thats must be a link.
      link: 'https://www.linkedin.com/in/luis-paulo-silva-martins-3b6a681aa/', // change to your profile link
    },
  ],
};
```
## Deployment

 You need to use **npm run deploy-static** instead of **npm run build** and the file output would be **out** instead of **build** or **.next** . Also, according to [nextruntime](https://github.com/netlify/next-runtime) you will need to create a environment variable called **NETLIFY_NEXT_PLUGIN_SKIP** with **true** value

## Author

made for me,[ZAPHODH](https://github.com/ZAPHODh).
