<script setup>
    import { onMounted, ref } from 'vue';

    // Mendefinisikan props
    const props = defineProps({
        txt: {
            type: String,
            required: true
        },
        speed: {
            type: String,
            required: true
        }
    });

    // Menggunakan referensi untuk elemen scroller
    const scroller = ref(null);

    // Fungsi untuk menambahkan animasi
    const tambahAnimasi = () => {
        if (scroller.value) {
            scroller.value.setAttribute("data-animated", true);

            const scrollerInner = scroller.value.querySelector(".scroller-inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            });
        }
    };

    // Menjalankan fungsi tambahAnimasi setelah komponen dimount
    onMounted(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            tambahAnimasi();
        }
    });
</script>

<template>
    <div class="scroller" :data-speed="speed" ref="scroller">
      <ul class="tag-list scroller-inner">
        <li v-for="i in 4" :key="i">{{ txt }}</li>
      </ul>
    </div>
</template>

<style scoped>
    .scroller {
        font-family: var(--pixel);
        max-width: 100%;
        user-select: none;
    }
    .scroller[data-animated="true"] {
        overflow: hidden;
        -webkit-mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
        );
        mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
    }

    .scroller[data-animated="true"] .scroller-inner {
        width: max-content;
        flex-wrap: nowrap;
        animation: scroll var(--_animation-duration, 40s)
        var(--_animation-direction, forwards) linear infinite;
    }
    .scroller[data-direction="right"] {
        --_animation-direction: reverse;
    }
    .scroller[data-direction="left"] {
        --_animation-direction: forwards;
    }
    .scroller[data-speed="fast"] {
        --_animation-duration: 20s;
    }
    .scroller[data-speed="slow"] {
        --_animation-duration: 60s;
    }

    @keyframes scroll {
        to {
        transform: translate(calc(-50% - 0.5rem));
        }
    }

    .scroller-inner {
        padding-block: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .tag-list {
        margin: 0;
        padding-inline: 0;
        list-style: none;
    }
    .tag-list li {
        color: #fff;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 1rem;
    }
</style>