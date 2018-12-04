import { MyContext } from '../components/Provider/Provider';

const MockedProvider = MyContext.Provider;

const showCharacters = jest.fn();

const defaultState = {
    state: {
        characters: null
    },
    actions: {
        showCharacters
    }
}

const characterSeed = [
    {id: 1, name: 'Fake Character', stats: { hp: 1, health: 10}},
    {id: 2, name: 'Faux Character', stats: { hp: 1, health: 10}},
    {id: 3, name: 'Flake Character', stats: { hp: 1, health: 10}}
];

const contextValueSeed = {
    state: {
        characters: characterSeed
    },
    actions: {
        showCharacters
    }
}

export { MockedProvider, contextValueSeed, defaultState };