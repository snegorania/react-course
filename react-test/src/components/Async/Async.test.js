import { render, screen } from "@testing-library/react";
import Async from './Async';

describe('async component', () => {
    test("tetst loading of async component", async() => {
        window.fetch = jest.fn().mockResolvedValueOnce({
            json: async() => [{id: 'p1', title: 'First post'}]
        })
        render(<Async/>);
        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).not.toHaveLength(0);
    })
})