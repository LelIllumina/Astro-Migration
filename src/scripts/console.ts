document.addEventListener("astro:after-swap", () => {
  console.log(
    "%cHey!\n",

    /* CSS */ `
    @import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
    color: darkgoldenrod;
    font-family: 'Gloock', system-ui, serif;
    font-size: 4rem;
    -webkit-text-stroke: 1px white;
    font-weight: bold;
    `,

    "You can view the proper sourcecode for this site on my GitHub: https://github.com/LelIllumina/Astro-Migration/ and for my old site on https://github.com/LelIllumina/LelIllumina.github.io/"
  );
});
