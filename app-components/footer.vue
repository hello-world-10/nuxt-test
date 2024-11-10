<template>
  <section class="bg-[#2D2F31] text-white py-6 pb-28">
    <div class="container mx-auto pb-4 flex flex-col min-[1080px]:flex-row min-[1080px]:items-center gap-4 h-fit">
      <div class="text-lg text-white flex-1">
        <span class="font-bold">
          Top companies choose
          <a href="#" target="_blank"
            rel="noopener" class="text-blue-400 hover:underline">
            Udemy Business
          </a>
          to build in-demand career skills.
        </span>
      </div>
      <div class="flex gap-5 flex-1">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq" class="h-11 w-28"
          loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagen" class="h-11 w-11"
          loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Box" class="h-11 w-16" loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="NetApp" class="h-11 w-28"
          loading="lazy">
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Eventbrite" class="h-11 w-28"
          loading="lazy">
      </div>
    </div>
    <hr class=" border-t-2 border-[#3E4143] "/>
    <div class="container mx-auto flex flex-col min-[700px]:flex-row justify-between mt-4">
      <div class="mb-6 md:mb-0">
        <ul class="mt-4 space-y-2">
          <li><a href="#"
              class="text-sm hover:underline" target="_blank" rel="noopener">Udemy Business</a></li>
          <li><a class="text-sm hover:underline" href="#">Teach on Udemy</a></li>
          <li><a class="text-sm hover:underline" href="#" target="_blank" rel="noopener noreferrer">Get the
              app</a></li>
          <li><a class="text-sm hover:underline" href="#">About us</a></li>
          <li><a class="text-sm hover:underline" href="#">Contact
              us</a></li>
        </ul>
      </div>
      <div class="mb-6 md:mb-0">
        <ul class="space-y-2">
          <li><a class="text-sm hover:underline" href="https://about.udemy.com/careers?locale=en-us">Careers</a></li>
          <li><a class="text-sm hover:underline" href="https://blog.udemy.com/?ref=footer">Blog</a></li>
          <li><a class="text-sm hover:underline" href="#">Help and Support</a></li>
          <li><a class="text-sm hover:underline" href="#">Affiliate</a></li>
          <li><a class="text-sm hover:underline" href="https://investors.udemy.com">Investors</a></li>
        </ul>
      </div>
      <div class="">
        <ul class="space-y-2">
          <li><a class="text-sm hover:underline" href="#">Terms</a></li>
          <li><a class="text-sm hover:underline" href="#">Privacy policy</a></li>
          <li data-testid="cookie-settings">
            <button type="button" class="text-sm hover:underline" data-purpose="footer.links.cookie_preferences">
              <span>Cookie settings</span>
            </button>
          </li>
          <li><a class="text-sm hover:underline" href="#">Sitemap</a></li>
          <li><a class="text-sm hover:underline"
              href="https://about.udemy.com/accessibility-statement?locale=en-us">Accessibility statement</a></li>
        </ul>
      </div>
      <div class="border border-white self-start px-6 py-2 flex justify-center text-base">
        <button type="button" class="flex items-center gap-3 text-sm" data-testid="language-selector-button">
          <fa :icon="['fas', 'globe']" />
          <span>English</span>
        </button>
      </div>
    </div>
    <div class="container mx-auto flex justify-between items-center mt-8">
      <a href="/" class="text-lg font-bold">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy"
          class="w-24 h-auto">
      </a>
      <div class="text-xs">
        © 2024 Udemy, Inc.
      </div>
    </div>
  </section>
</template>
