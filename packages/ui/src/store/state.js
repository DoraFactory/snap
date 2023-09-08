import { writable } from 'svelte/store';

export const state = writable({
    connected: false,
    showMenu: true,
    openAddAddressPopup: false,
    openAddChainPopup: false,
    confirmDeleteChainPopup: false,
    alertText: "",
    showAlert: true,
    alertType: "success"
});