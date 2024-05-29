
<template>
    <div class="item-path">
        <slot name="icon"></slot>
        
        <div class="desc-path">
            <div>
                <p>
                    <slot name="title"></slot>
                </p>
                <p>
                    <slot name="desc"></slot>
                </p>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .item-path {
        width: calc(100% / 3);
        min-height: 200px;
        padding: 1rem;
        background-color: #fbfbfbda;
        transition: var(--anim);
        border-radius: 1rem;
        cursor: pointer;
        
        &:hover {
            background-color: var(--white);
            box-shadow: 2px 3px 8px #00000075;
            transform: translate(-2px, -3px);
        }

        & .desc-path {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            & p:first-child {
                color: var(--black);
                font-size: 1.25rem;
                font-weight: 700;
                text-transform: capitalize;
                margin-bottom: .25rem;
            }
            & p:last-child {
                color: var(--black-soft);
                font-size: 1rem;
                margin-bottom: 0;
            }
        }
    }
</style>