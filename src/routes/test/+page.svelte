<script lang="ts">
  import { onMount } from 'svelte';
  
  let hideElement: boolean = false;
  let targetElement: HTMLDivElement;
  let observer: IntersectionObserver;
  
  onMount(() => {
    // Create intersection observer
    observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          // When target element enters viewport (scrolled past)
          if (entry.isIntersecting) {
            hideElement = true;
          } else {
            // Optionally show again when scrolling back up
            hideElement = false;
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px'
      }
    );
    
    // Start observing the target element
    if (targetElement) {
      observer.observe(targetElement);
    }
    
    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });
</script>

<div class="min-h-screen p-5">
  <!-- Element that will disappear -->
  {#if !hideElement}
    <div 
      class="fixed top-5 right-5 bg-gradient-to-br from-purple-500 to-purple-700 text-white px-8 py-5 rounded-xl shadow-2xl z-50"
    >
      <h2 class="text-xl font-bold mb-2">I will disappear!</h2>
      <p class="text-sm opacity-90">Scroll down to make me vanish</p>
    </div>
  {/if}
  
  <!-- Content -->
  <div class="max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold mb-4">Scroll Down</h1>
    <p class="text-lg text-gray-600 mb-8">Keep scrolling to see the magic happen...</p>
    
    <div class="h-screen"></div>
    
    <!-- Target element - when this comes into view, the floating element disappears -->
    <div 
      bind:this={targetElement}
      class="bg-gradient-to-br from-pink-400 to-red-500 text-white p-10 rounded-2xl text-center shadow-2xl"
    >
      <h2 class="text-4xl font-bold mb-3">🎯 Target Reached!</h2>
      <p class="text-lg opacity-90">You've scrolled past the trigger point</p>
    </div>
    
    <div class="h-screen"></div>
    
    <p class="text-lg text-gray-600 text-center">Scroll back up to see the element reappear</p>
  </div>
</div>