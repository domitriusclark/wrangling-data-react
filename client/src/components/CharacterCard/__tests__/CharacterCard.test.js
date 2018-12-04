import React from 'react';
import { render, cleanup } from 'react-testing-library';
import CharacterCard, { STYLE_BLOCK } from '../CharacterCard';

afterEach(cleanup);

const mockProps = {
    id: 1,
    name: 'Domitrius',
    stats: {
        hp: 200,
        strength: 13,
        vitality: 34,
        speed: 12,
        mana: 35,
        spirit: 55
    }
};


test('CharacterCard renders with a name', () => {
    const { name, stats } = mockProps;
    const { getByText } = render(<CharacterCard name={name} stats={stats} />)
    
    const nameNode = getByText(name);


    expect(nameNode.innerHTML).toMatch('Domitrius');
    
});

test('statsGrid renders children', () => {
    const { stats } = mockProps;
    
    render(<CharacterCard stats={stats} />);

    const statContainer = document.getElementsByClassName(`${STYLE_BLOCK}__stats`)[0];

    expect(statContainer.children.length).toBeGreaterThan(0);
});
