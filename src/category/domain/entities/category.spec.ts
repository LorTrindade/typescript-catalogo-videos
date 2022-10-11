import { Category } from "./category"
import { omit } from 'lodash';

describe('Category Unit Tests', () => {

    test('category constructor', () => {
        let category = new Category({name: 'Movie'});

        let props = omit(category.props, 'created_at');
        expect(props).toStrictEqual({
            name:'Movie', 
            description: null, 
            is_active: true, 
        })
        expect(category.props.created_at).toBeInstanceOf(Date);
    })

    test('getter of name field', () => {
        const category = new Category({name: 'Movie'});
        expect(category.name).toBe('Movie');
    })

    test('getter and setter of description field', () => {
        let category = new Category({
            name: 'Movie',
            description: 'some description'
        });
        expect(category.description).toBe('some description');
    })

    test('getter and setter of is_active', () => {
        let category = new Category({
            name: 'Movie'
        });
        expect(category.is_active).toBeTruthy();

        category = new Category ({
            name: 'Movie',
            is_active: false
        });
        expect(category.is_active).toBeFalsy();
    })

    test('getter of created_at prop', () => {
        let category = new Category({
            name: 'movie'
        });
        expect(category.created_at).toBeInstanceOf(Date);
        let created_at = new Date();
        category = new Category({
            name: 'Movie',
            created_at
        });
        expect(category.created_at).toBe(created_at);
    })
})