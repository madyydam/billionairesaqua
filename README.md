# Product Story Weaver

Build a Premium Interactive 3D Product Website



Create a high-end, cinematic, premium 3D product website inspired by modern award-winning product websites and the attached reference video.



This must NOT look like a normal SaaS landing page, template website, ecommerce grid, or generic AI-generated website.



The main focus is the 3D product storytelling experience.



The website should feel like a premium global product brand website with smooth cinematic transitions, sophisticated typography, strong visual hierarchy, realistic product presentation, and scroll-driven animations.



---



1. CORE EXPERIENCE



The entire website should revolve around one hero product.



The product should behave like a real 3D object inside the webpage.



As the user scrolls:



- The product moves through different positions.

- The product rotates smoothly.

- The product scales up and down.

- The product transitions from one section to another.

- The camera/viewpoint changes naturally.

- Text and product animation should be synchronized.

- The product should never feel like it simply disappears and reappears.

- Transitions between sections should feel continuous.



The experience should feel similar to a cinematic product commercial controlled by scrolling.



The user should feel that they are travelling through the product story.



---



2. TECHNOLOGY



Use a modern React architecture.



Preferred technologies:



- React

- TypeScript

- Three.js

- React Three Fiber where appropriate

- Drei where appropriate

- GSAP

- GSAP ScrollTrigger

- Lenis or another smooth-scroll solution

- CSS / Tailwind for layout

- Vite



Do NOT use fake CSS animations to imitate 3D if an actual 3D implementation is possible.



The 3D product should be rendered using WebGL / Three.js.



Structure the application cleanly so that the 3D experience can be modified later without rewriting the entire website.



---



3. 3D PRODUCT SYSTEM



Create a reusable 3D product component.



Example structure:



ProductScene



- ProductModel

- Camera

- Lighting

- Environment

- PostProcessing if required

- AnimationController

- ScrollController



The product model should support:



- Position

- Rotation

- Scale

- Camera distance

- Camera angle

- Material properties

- Opacity where required



Use a ".glb" / ".gltf" model when provided.



Create a clearly documented location such as:



"/public/models/product.glb"



If the real product model is not available yet, create a temporary placeholder 3D object so the entire animation system can still be tested.



Do NOT design the website around a flat PNG.



The architecture must allow me to replace the placeholder with the real ".glb" model later.



---



4. HERO SECTION



Create an extremely premium fullscreen hero.



Desktop:



- 100vh minimum

- Product prominently visible

- Product positioned slightly left or center depending on the composition

- Large elegant headline

- Minimal supporting copy

- One primary CTA

- Small scroll indicator



Example content:



"DESIGNED TO BE EXPERIENCED."



"Meet the next generation of [PRODUCT CATEGORY]."



CTA:



"EXPLORE THE PRODUCT"



The text should remain minimal.



The product should be the visual hero.



Hero animation



On initial page load:



1. Background appears smoothly.

2. Product fades/enters with subtle movement.

3. Product slightly rotates.

4. Typography appears with staggered animation.

5. CTA appears last.

6. Everything settles into a premium static composition.



Do NOT make the entrance animation overly flashy.



It should feel expensive and cinematic.



---



5. SCROLL EXPERIENCE



This is the most important part.



Use GSAP ScrollTrigger or an equivalent robust scroll animation system.



Create a pinned product storytelling section.



As the user scrolls:



Scene 1 — Hero



Product:



- Large

- Slightly left/right positioned

- Gentle rotation



Text:



- Main product statement



---



Scene 2 — Product Introduction



When the user scrolls:



- Hero text moves away.

- Product smoothly travels toward the opposite side.

- Product rotates approximately 30–90 degrees depending on the model.

- Product slightly scales down.

- New text appears.



Example:



"EVERY DETAIL HAS A PURPOSE."



Show 2–3 short product benefits.



Do not create a conventional card grid.



The product should remain the main visual anchor.



---



Scene 3 — Center Focus



Continue scrolling.



The product moves toward the center of the screen.



Scale it up.



Camera moves slightly closer.



Display a strong statement:



"ENGINEERED FOR THE WAY YOU LIVE."



Use a minimal composition.



Allow the product to dominate the viewport.



---



Scene 4 — Detail Exploration



Move the product slightly to one side.



Reveal product details through elegant callouts.



Examples:



- Premium materials

- Precision engineering

- Ergonomic design

- Advanced technology



Use subtle connecting lines or minimal floating labels.



Avoid generic UI cards.



The labels should appear naturally as part of the 3D scene.



---



6. PRODUCT REVEAL / UNWRAPPING SECTION



Create a cinematic product reveal inspired by the attached reference.



The product should appear as if it is inside premium packaging.



As the user scrolls:



1. Packaging appears.

2. Packaging rotates or opens.

3. Outer wrapping separates.

4. Inner product becomes visible.

5. Product emerges.

6. Product becomes the primary focus.



This should be implemented as a true animation system where possible.



If the supplied 3D asset does not contain separate packaging parts, structure the component so separate models can be added later:



- packaging.glb

- product.glb

- accessory.glb



Do not fake the effect with random images.



---



7. PRODUCT ROTATION SECTION



Create a section where the user gets a cinematic 360° product view.



As the user scrolls:



- Product rotates continuously.

- Camera subtly changes perspective.

- Product remains perfectly centered.

- Lighting highlights the material.

- Background stays minimal.



Add a small label:



"SEE EVERY ANGLE"



Optional interaction:



Allow the user to drag the product with mouse/touch to rotate it.



Make drag interaction coexist properly with scroll.



---



8. MATERIAL / TECHNOLOGY SECTION



Create a premium section explaining the technology/material behind the product.



The product should remain visible in 3D.



Use cinematic transitions rather than normal feature cards.



Example:



"BUILT FROM THE DETAILS UP."



Then reveal:



01 — Premium Materials

02 — Precision Engineering

03 — Intelligent Design

04 — Long-lasting Performance



When each item becomes active:



- Product subtly changes camera angle.

- Lighting changes slightly.

- Relevant area of the product can be emphasized if the 3D model supports it.



---



9. FULLSCREEN PRODUCT MOMENT



Create one dramatic fullscreen section.



Almost no UI.



Large product.



Minimal text.



Example:



"NOT JUST A PRODUCT."



Small supporting line:



"An experience designed down to the smallest detail."



Use a slow cinematic camera movement.



This section should feel like a luxury advertisement.



---



10. PRODUCT BENEFITS



After the cinematic sections, transition into a more readable product-benefit section.



Use 3–4 benefits.



Example:



01

Precision



02

Performance



03

Comfort



04

Craftsmanship



Use large typography and generous spacing.



Avoid colorful cards.



Avoid excessive gradients.



Avoid generic SaaS-style UI.



---



11. FINAL CTA



Create a premium final CTA.



Product appears in the center.



Background becomes slightly more dramatic.



Heading:



"READY TO EXPERIENCE IT?"



CTA:



"GET STARTED"



Secondary:



"LEARN MORE"



The product should perform one final subtle rotation while the CTA appears.



---



12. VISUAL DESIGN



The website should look:



- Premium

- Minimal

- Cinematic

- Sophisticated

- Editorial

- Modern

- High-end

- Technology-driven

- Product-focused



Avoid:



- Generic gradients

- Excessive glassmorphism

- Random blobs

- Excessive rounded cards

- Cheap-looking shadows

- Stock illustrations

- Emoji

- Generic dashboard components

- Template-like sections

- Excessive text



Use:



- Large typography

- Strong whitespace

- Fine borders

- Subtle shadows

- Sophisticated contrast

- Premium spacing

- Smooth transitions

- Subtle grain/noise if appropriate



---



13. TYPOGRAPHY



Use a premium modern font pairing.



Prefer something similar to:



- Inter

- Geist

- Satoshi

- Manrope

- Neue Montreal style typography



Use:



- Large display typography for headlines.

- Medium-weight body text.

- Tight but readable letter spacing.

- Strong hierarchy.



Do not use too many font families.



---



14. COLOR SYSTEM



Keep the palette restrained.



Default direction:



- Premium off-white / black / charcoal background

- Product-specific accent color

- Neutral typography



Do not make the website overly colorful.



The product should provide most of the visual interest.



Make colors configurable from one central theme file.



---



15. 3D LIGHTING



The product must look premium and realistic.



Use:



- Soft key light

- Fill light

- Rim light

- Environment lighting

- Subtle shadows

- Ambient occlusion where performance allows



Lighting should emphasize:



- Product edges

- Material

- Surface quality

- Depth



Avoid extremely bright or game-like lighting.



The product should look like it was shot in a professional studio.



---



16. CAMERA ANIMATION



Create a controlled camera animation system.



Camera properties should be adjustable per scene:



Scene 1:



- Wide

- Slightly angled



Scene 2:



- Medium

- Side perspective



Scene 3:



- Close-up



Scene 4:



- Centered

- Product-focused



Scene 5:



- Cinematic wide shot



Camera transitions must be interpolated smoothly.



No sudden jumps.



---



17. SCROLL ANIMATION ARCHITECTURE



Create a centralized animation timeline.



For example:



scrollProgress = 0 → 1



Map different ranges to different scenes.



Example concept:



0.00–0.18

Hero



0.18–0.35

Product Introduction



0.35–0.52

Center Focus



0.52–0.70

Technology / Details



0.70–0.85

Product Reveal



0.85–1.00

Final Product Moment



Use GSAP timelines / ScrollTrigger rather than dozens of unrelated animations.



Animations should be easy to adjust.



Create configuration variables for:



- Product positions

- Rotation

- Scale

- Camera position

- Camera FOV

- Scene duration

- Scroll speed

- Animation easing



---



18. SMOOTH SCROLL



Implement premium smooth scrolling.



Scrolling should feel:



- Fluid

- Heavy

- Cinematic

- Responsive



Avoid excessive lag.



Make sure ScrollTrigger remains synchronized with the smooth-scroll library.



---



19. MOBILE EXPERIENCE



Do NOT simply shrink the desktop version.



Create a proper mobile composition.



On mobile:



- Product remains visible.

- Text becomes smaller.

- 3D camera adjusts.

- Product scale changes.

- Animation complexity can be reduced.

- Touch interaction should work.

- Avoid horizontal overflow.



If WebGL performance becomes too expensive on low-end mobile devices, gracefully reduce:



- Shadow quality

- Pixel ratio

- Post-processing

- Particle effects



The website must remain usable.



---



20. PERFORMANCE



This is extremely important.



The website should feel premium without becoming unnecessarily heavy.



Implement:



- Lazy loading for 3D assets

- GLB compression support

- Draco support if needed

- Texture optimization

- Responsive pixel ratio

- Device capability detection

- Reduced effects on low-end devices

- Proper disposal of Three.js resources

- Avoid unnecessary React re-renders

- Use animation frames efficiently

- Do not recreate Three.js objects repeatedly



Do not load huge assets before they are needed.



---



21. LOADING EXPERIENCE



Create a premium loading screen.



Example:



Minimal centered brand mark.



Small loading indicator.



Once the 3D model is ready:



- Loading screen fades out.

- Product enters naturally.



Do not show a boring browser-like loading state.



If the 3D model takes longer to load, provide a graceful fallback.



---



22. INTERACTION



Add subtle interactions:



- Product drag-to-rotate

- CTA hover animation

- Text reveal

- Cursor interaction on desktop

- Subtle parallax

- Smooth section transitions



Do NOT over-animate every element.



Animation should communicate hierarchy.



---



23. RESPONSIVE BREAKPOINTS



Support:



- Large desktop

- Desktop

- Tablet

- Mobile

- Small mobile



Test:



1366×768

1440×900

1920×1080

1024×768

768×1024

390×844

360×800



No horizontal scrolling.



---



24. ACCESSIBILITY



Include:



- Semantic HTML

- Keyboard navigation

- Proper button labels

- Accessible navigation

- Reduced-motion support

- Sufficient contrast

- Screen-reader-friendly content



If the user has "prefers-reduced-motion", significantly reduce 3D and scroll animations.



---



25. CODE QUALITY



Use a clean architecture.



Suggested structure:



src/

components/

3d/

ProductScene.tsx

ProductModel.tsx

CameraController.tsx

Lighting.tsx

ScrollAnimation.tsx

sections/

Hero.tsx

ProductIntro.tsx

ProductDetails.tsx

ProductReveal.tsx

Technology.tsx

FinalCTA.tsx

ui/

hooks/

useScrollProgress.ts

useDevicePerformance.ts

config/

productAnimation.ts

theme.ts

pages/

Home.tsx



Keep animation configuration separate from UI components.



Do not create one giant component containing the entire website.



---



26. IMPORTANT: REAL 3D ASSET SUPPORT



Design the entire system so that I can later upload:



"product.glb"



and replace the placeholder without changing the entire website.



Also support:



"packaging.glb"



"accessories.glb"



if required.



The product model should be independently controllable.



---



27. FALLBACK MODE



If WebGL is unavailable:



Show a high-quality product image / image sequence instead of breaking the website.



The website should never show:



- Blank canvas

- Broken 3D scene

- Console errors

- Missing model errors



---



28. NAVIGATION



Create a minimal navigation.



Desktop:



Logo on left.



Navigation in center/right:



Product

Technology

Details

About



CTA:



"SHOP NOW"



Navigation should become transparent/overlay over the hero and transition into a subtle background when scrolling.



Mobile:



Use a clean hamburger menu.



Do not make the navigation visually dominant.



---



29. MICRO-INTERACTIONS



Add subtle premium interactions:



- Button magnetic effect

- Underline reveal

- Text mask reveal

- Image/3D hover movement

- Smooth opacity transitions

- Section entrance animations



Keep these subtle.



---



30. SEO



Implement proper:



- Title

- Meta description

- Open Graph metadata

- Semantic headings

- Product structured data where applicable

- Descriptive alt text

- Canonical URL placeholder



The 3D experience should not compromise SEO.



Important text content must remain available in HTML rather than being rendered only inside WebGL.



---



31. FINAL DESIGN DIRECTION



The final result should feel like:



A premium interactive product commercial converted into a website.



When the user scrolls, it should feel like:



Hero → Product moves → Product rotates → Story changes → Product reveals details → Packaging opens → Product becomes dominant → Final CTA.



The product must remain the hero throughout the experience.



Do NOT create a conventional landing page with a 3D object placed on top.



Instead, build the entire website around the 3D product storytelling experience.



---



32. DEVELOPMENT REQUIREMENT



Before finishing:



1. Make the complete page functional.

2. Ensure the 3D scene loads correctly.

3. Ensure scroll animation works.

4. Ensure product transitions between sections smoothly.

5. Ensure mobile works.

6. Ensure reduced-motion mode works.

7. Ensure WebGL fallback works.

8. Ensure there are no console errors.

9. Ensure there is no horizontal overflow.

10. Ensure all buttons and navigation work.

11. Ensure the real ".glb" model can be inserted later.

12. Keep the code modular and production-ready.



Do not stop after creating the visual layout.



Build the actual interactive experience.



The final result should be production-quality, premium, cinematic and responsive, not a prototype or static mockup.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cinematic-product-story.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/99cef998-cdf7-48fb-9e22-e969931c59e8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
