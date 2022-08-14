export const isOnServerSide = () => typeof window === 'undefined';

export const isOnClientSide = () => !isOnServerSide();
