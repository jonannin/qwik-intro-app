import { component$, Slot, useSignal } from "@builder.io/qwik";

export default component$(() => {
    const isJoeVisibleSignal = useSignal(false);
    return (
        <>
            <button
                onClick$={() => {
                    isJoeVisibleSignal.value = !isJoeVisibleSignal.value;
                    console.log("Ahoji");
                }}
            >
                Ahoji
            </button>
            {isJoeVisibleSignal.value ? <Joe>I love Joe</Joe> : null}
        </>
    );
});

export const Joe = component$(() => {
    return (
        <>
            <div>Hi! I am Joe. Yay!!!</div>
            <Slot />
        </>
    );
});
