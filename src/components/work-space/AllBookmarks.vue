<script setup>
    import BookmarksGroup from './BookmarksGroup.vue';
    import TitleSection from '../global/TitleSection.vue';
    import IconChevronRight from '../icons/IconChevronRight.vue';
    import IconCoding from '../icons/IconCoding.vue';
</script>

<script>
    export default {
        components: {
            BookmarksGroup
        },
        data() {
            return {
                allAccordionsOpen: false
            };
        },
        methods: {
            toggleAllAccordions() {
                this.allAccordionsOpen = !this.allAccordionsOpen;
                const bookmarkGroups = Array.isArray(this.$refs.bookmarkGroups)
                    ? this.$refs.bookmarkGroups
                    : [this.$refs.bookmarkGroups];
                bookmarkGroups.forEach(group => {
                    group.isCollapsed = !this.allAccordionsOpen;
                });
            }
        }
    };
</script>

<template>
    <div class="wrap-all-bookmarks">
        <TitleSection title="All Bookmarks">
            <button id="collapse-all" class="cr-btn cr-primary cr-mini" @click="toggleAllAccordions">
                <span v-if="allAccordionsOpen">Collapse All</span>
                <span v-else>Open All</span>
            </button>
        </TitleSection>

        <div class="all-bookmarks">
            <div class="bookmarks-col">
                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Inspirasi</template>
                    
                    <li>
                        <a href="https://dribbble.com/" target="_blank">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png" alt="logo">
                            <div>
                                <span>dribbble</span>
                                <span>Tempat buat nyari ide dan isnpirasi design</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://id.pinterest.com/" target="_blank">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" alt="logo">
                            <div>
                                <span>pinterest</span>
                                <span>Tempat buat nyari ide dan isnpirasi design</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/" target="_blank">
                            <img src="https://cdn.worldvectorlogo.com/logos/behance-1.svg" alt="logo">
                            <div>
                                <span>Behance</span>
                                <span>Tempat buat nyari ide dan isnpirasi design</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://ui8.net/" target="_blank">
                            <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/ui_logo_icon_147171.png" alt="logo">
                            <div>
                                <span>UI8</span>
                                <span>Tempat buat nyari ide dan isnpirasi design</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://appshots.design/" target="_blank">
                            <img src="https://cdn-1.webcatalog.io/catalog/appshots/appshots-icon-filled-256.png?v=1675592469660" alt="logo">
                            <div>
                                <span>appshots</span>
                                <span>Tempat buat nyari ide dan isnpirasi design</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>

                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Jualan</template>

                    <li>
                        <a href="https://web.whatsapp.com/" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="logo">
                            <div>
                                <span>whatsapp</span>
                                <span>Ya gawe whatsapp'an, ate gawe opo maneh?</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://seller.shopee.co.id/" target="_blank">
                            <img src="https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png" alt="logo">
                            <div>
                                <span>Shopee Seller</span>
                                <span>Tempat mencari nafkah online</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://seller.tokopedia.com/" target="_blank">
                            <img src="https://static.gameloop.com/img/fe0b482a20f184874977b40e9657046a.png?imageMogr2/thumbnail/172.8x172.8/format/webp" alt="logo">
                            <div>
                                <span>Tokopedia Seller</span>
                                <span>Tempat mencari nafkah online</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://seller-id.tiktok.com/homepage" target="_blank">
                            <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gmpn79net1vrfr8x9rgja1t6.png" alt="logo">
                            <div>
                                <span>Tiktok Shop</span>
                                <span>Tempat mencari nafkah online</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>

                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Hiburan</template>

                    <li>
                        <a href="https://www.netflix.com/browse" target="_blank">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/017/396/814/small/netflix-mobile-application-logo-free-png.png" alt="logo">
                            <div>
                                <span>netflix</span>
                                <span>Buat nonton film, bayar tiap bulan</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.bilibili.tv/id" target="_blank">
                            <img src="https://image.winudf.com/v2/user/admin/YWRtaW5faWNvbi5naWZfMTYzNTI5ODY0NTA5Nw" alt="logo">
                            <div>
                                <span>bstation</span>
                                <span>Buat nonton wanpis, conan, naruto, dkk</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.hotstar.com/id" target="_blank">
                            <img src="https://i.pinimg.com/originals/6c/50/6a/6c506a9e69065a3c4f57c99d264e801b.jpg" alt="logo">
                            <div>
                                <span>Disney+ hotstar</span>
                                <span>Buat nonton film juga, tapi aku gak langganan</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.vidio.com/" target="_blank">
                            <img src="https://play-lh.googleusercontent.com/3ts5UkkKO1VN4jhH4NNaCwxp67V51KyNIWYJZxp1kfVvSIkg4riXHN9ZUrISZPnPtXZa" alt="logo">
                            <div>
                                <span>Vidio</span>
                                <span>Buat nonton sepak bola, film juga ada</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="logo">
                            <div>
                                <span>yuotube</span>
                                <span>Buat nonton video apapun, gratis kok</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>
            </div>

            <div class="bookmarks-col">
                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Icon</template>

                    <li>
                        <a href="https://fontawesome.com/v5/search" target="_blank">
                            <img src="https://static-00.iconduck.com/assets.00/font-awesome-icon-256x256-b4g1oaxh.png" alt="logo">
                            <div>
                                <span>Font Awesome 5</span>
                                <span>Icon pack buat kebutuhan develop website</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://fontawesome.com/v6/search" target="_blank">
                            <img src="https://static-00.iconduck.com/assets.00/font-awesome-icon-256x256-b4g1oaxh.png" alt="logo">
                            <div>
                                <span>Font Awesome 6</span>
                                <span>Icon pack buat kebutuhan develop website</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://tablericons.com/" target="_blank">
                            <img src="https://blog.logrocket.com/wp-content/uploads/2020/07/tabler-icons-logo.png" alt="logo">
                            <div>
                                <span>tabler icons</span>
                                <span>Icon format svg gratis hampir lengkap</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://iconscout.com/" target="_blank">
                            <img src="https://iconscout.com/iconscout_logo-1024x1024.png" alt="logo">
                            <div>
                                <span>iconscout</span>
                                <span>Tempat nyari icon svg berwarna</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://iconduck.com/" target="_blank">
                            <img src="https://cdn.dribbble.com/users/12982427/avatars/normal/4fd7fe9bf12e52ec66e66a68630fe80b.png?1692121957" alt="logo">
                            <div>
                                <span>iconduck</span>
                                <span>Tempat nyari gratis bebas attribute</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://lottiefiles.com/" target="_blank">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-lottiefiles-logo-5622688-4674917.png" alt="logo">
                            <div>
                                <span>lottie files</span>
                                <span>Tempat nyari icon dan gambar animasi</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://lordicon.com/" target="_blank">
                            <img src="https://uploads.commoninja.com/searchengine/webflow/lordicon-animated-icons.png" alt="logo">
                            <div>
                                <span>lord icon</span>
                                <span>Tempat nyari icon animasi</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.iconfinder.com/search?q=&family=essentia-line" target="_blank">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/iconfinder-logo-png-transparent.png" alt="logo">
                            <div>
                                <span>icon finder</span>
                                <span>Tempat nyari icon berbayar</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>

                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Gambar</template>

                    <li>
                        <a href="https://www.freepik.com/" target="_blank">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/freepik-logo-png-transparent.png" alt="logo">
                            <div>
                                <span>Freepik</span>
                                <span>Tempat buat nyari gambar, vektor, dll</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://pixabay.com/id/" target="_blank">
                            <img src="https://cdn.pixabay.com/photo/2017/01/17/14/41/pixabay-1987080_1280.png" alt="logo">
                            <div>
                                <span>pixabay</span>
                                <span>Tempat buat nyari foto bebas copyright</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.istockphoto.com/id" target="_blank">
                            <img src="https://cdn-icons-png.freepik.com/512/23/23359.png" alt="logo">
                            <div>
                                <span>istock photo</span>
                                <span>Tempat buat nyari foto berbayar</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.gettyimages.com/" target="_blank">
                            <img src="https://companieslogo.com/img/orig/GETY-85252eb3.png?t=1667802056" alt="logo">
                            <div>
                                <span>getty images</span>
                                <span>Tempat buat nyari foto dan asset berbayar</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>

                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Challenge</template>

                    <li>
                        <a href="https://cssbattle.dev/" target="_blank">
                            <img src="https://pbs.twimg.com/profile_images/1114446136302084096/BIu19jPP_400x400.png" alt="logo">
                            <div>
                                <span>cSS battle</span>
                                <span>Tantangan CSS biar makin pinter</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://icodethis.com/app" target="_blank">
                            <img src="https://pbs.twimg.com/profile_images/1633847644966772737/m8yU9m0A_400x400.jpg" alt="logo">
                            <div>
                                <span>iCodeThis</span>
                                <span>Tantangan design frontend harian</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://codecombat.com/play/dungeon#" target="_blank">
                            <img src="https://codecombat.com/images/pages/base/logo_square_250.png" alt="logo">
                            <div>
                                <span>code combat</span>
                                <span>Main game sambil belajar javascript</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>
            </div>

            <div class="bookmarks-col">
                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Frontend toolkit</template>

                    <li>
                        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">
                            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo">
                            <div>
                                <span>bootstrap 5</span>
                                <span>Komponen web yang sering dipake</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.syncfusion.com/blazor-components" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/35288192?v=4" alt="logo">
                            <div>
                                <span>syncfusion Blazor</span>
                                <span>Komponen buat project blazor</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://gsap.com/" target="_blank">
                            <img src="https://www.cdnlogo.com/logos/g/31/gsap-greensock.svg" alt="logo">
                            <div>
                                <span>GSAP</span>
                                <span>Plugin efek website super keren</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://owlcarousel2.github.io/OwlCarousel2/" target="_blank">
                            <img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/owl-logo_0.png?itok=cgxJYYny" alt="logo">
                            <div>
                                <span>owl carousel 2</span>
                                <span>Carousel gratisan</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.asciitable.com/" target="_blank">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/ascii-1-logo-png-transparent.png" alt="logo">
                            <div>
                                <span>ascii table</span>
                                <span>Kode ascii pengganti simbol</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>
                
                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>CSS tools</template>

                </BookmarksGroup>
            </div>

            <div class="bookmarks-col">
                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Web tools</template>

                    <li>
                        <a href="https://www.disposablemail.com/" target="_blank">
                            <img src="https://disposablemail.b-cdn.net/img/temp-mail.svg" alt="logo">
                            <div>
                                <span>disposable mail</span>
                                <span>Email temporary gratisan siap pakai</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.favicon-generator.org/" target="_blank">
                            <img src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png" alt="logo">
                            <div>
                                <span>favicon generator</span>
                                <span>Generate favicon segala ukuran</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.guidgenerator.com/" target="_blank">
                            <img src="https://www.onlinedatagenerator.com/Content/images/logo_odg.png" alt="logo">
                            <div>
                                <span>guid generator</span>
                                <span>Generate GUID buat database</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.base64-image.de/" target="_blank">
                            <img src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png" alt="logo">
                            <div>
                                <span>base64 converter</span>
                                <span>Convert gambar menjadi format base64</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>

                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Optimasi</template>

                    <li>
                        <a href="https://gtmetrix.com/" target="_blank">
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/gtmetrix_logo_icon_168137.png" alt="logo">
                            <div>
                                <span>GT metrix</span>
                                <span>Buat ngecek skor website</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://responsiveviewer.org/" target="_blank">
                            <img src="https://ph-files.imgix.net/10da359e-f597-495d-9f77-6e5d7ee8b420.png?auto=format" alt="logo">
                            <div>
                                <span>responsive viewer</span>
                                <span>Plugin chrome buat tes tampilan responsive</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>

                <BookmarksGroup ref="bookmarkGroups">
                    <template #groupIcon>
                        <IconCoding />
                    </template>
                    <template #groupTitle>Dokumentasi</template>

                    <li>
                        <a href="https://www.udemy.com/id/" target="_blank">
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/udemy_logo_icon_168372.png" alt="logo">
                            <div>
                                <span>udemy</span>
                                <span>Kursus online berbayar</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://css-tricks.com/" target="_blank">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/11907/logo-css-tricks.png" alt="logo">
                            <div>
                                <span>cSS-tricks</span>
                                <span>Artikel CSS yang sangat membantu sekali</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/andwar22" target="_blank">
                            <img src="https://seeklogo.com/images/C/codepen-logo-FDEB3664F1-seeklogo.com.png" alt="logo">
                            <div>
                                <span>codepen</span>
                                <span>Tempat nyimpen design dan komponen web</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://webkit.org/css-status/#" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/WebKit_logo_%282015%29_2.png" alt="logo">
                            <div>
                                <span>webkit</span>
                                <span>List penggunaan webkit pada CSS</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://sass-lang.com/" target="_blank">
                            <img src="https://sass-lang.com/assets/img/styleguide/seal-color.png" alt="logo">
                            <div>
                                <span>SASS</span>
                                <span>Website dokumentasi SASS</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://blazor.syncfusion.com/documentation/introduction" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/35288192?v=4" alt="logo">
                            <div>
                                <span>syncfusion</span>
                                <span>Dokumentasi komponen syncfusion blazor</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://javascript.info/" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="logo">
                            <div>
                                <span>javascript info</span>
                                <span>Dokumentasi lengkap javascript</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                    <li>
                        <a href="https://vuejs.org/" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="logo">
                            <div>
                                <span>vue jS</span>
                                <span>Dokumentasi vue javascript</span>
                            </div>
                            <IconChevronRight />
                        </a>
                    </li>
                </BookmarksGroup>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrap-all-bookmarks {
        padding: 0 2rem;

        & .all-bookmarks {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1rem;

            & .bookmarks-col {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                & .bookmark-header svg {
                    width: 30px;
                    height: 30px;
                }

                & li {
                    list-style: none;
                    margin-bottom: .5rem;

                    &:last-child {
                        margin-bottom: .25rem;
                    }

                    & a {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: .5rem;
                        color: var(--dark);
                        text-decoration: none;
                        padding: .5rem .75rem;
                        background-color: #ffffff95;
                        border-radius: .75rem;
                        transition: var(--anim);

                        &:hover {
                            background-color: #f8f8f8;
                            box-shadow: 2px 3px 8px #00000055;
                            transform: translate(-2px, -2px);
                        }

                        & img {
                            width: 25px;
                            height: 25px;
                            object-fit: contain;
                            object-position: center;
                        }
                        & div {
                            flex: 1;

                            & span:first-child {
                                display: block;
                                font-size: .85rem;
                                font-weight: 600;
                                text-transform: capitalize;
                            }
                            & span:last-child {
                                display: block;
                                font-size: .7rem;
                                font-weight: 400;
                                line-height: 1.3;
                                font-style: italic;
                            }
                        }
                        & svg {
                            color: grey;
                            width: 25px;
                            height: auto;
                            transition: var(--anim);
                        }

                        &:hover svg {
                            animation: chevronMove 1s ease infinite;
                        }
                    }
                }
            }
        }
    }
    
    @keyframes chevronMove {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-3px);
        }
    }
</style>