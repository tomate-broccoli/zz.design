const domainEvent = require('./hoge.js');

describe('domainEvent', () => {
    it('should create a domain event with the given name', () => {
        const eventName = '商品が注文された';
        const event = domainEvent(eventName);
        expect(event.eventName).toBe(eventName);
    });

    it('should add a note to the domain event', () => {
        const event = domainEvent('商品が注文された');
        event.note('ドメインイベントに対するコメント');
        expect(event.notes).toContain('ドメインイベントに対するコメント');
    });

    it('should mark the domain event as pending', () => {
        const event = domainEvent('商品が注文された');
        event.markPending();
        expect(event.isPending).toBe(true);
    });

    it('should add an action to the domain event', () => {
        const event = domainEvent('商品が注文された');
        event.action('商品を注文する').note('アクションに対するコメント');
        expect(event.actions[0].name).toBe('商品を注文する');
        expect(event.actions[0].notes).toContain('アクションに対するコメント');
    });

    it('should add a policy to the domain event', () => {
        const event = domainEvent('商品が注文された');
        event.policy('返品ポリシー').note('ポリシーに対するコメント');
        expect(event.policyName).toBe('返品ポリシー');
        expect(event.policyNotes).toContain('ポリシーに対するコメント');
    });

    it('should add an actor to the domain event', () => {
        const event = domainEvent('商品が注文された');
        event.actor('顧客').note('アクタに対するコメント');
        expect(event.actors[0].name).toBe('顧客');
        expect(event.actors[0].notes).toContain('アクタに対するコメント');
    });

    it('should add an aggregation to the domain event', () => {
        const event = domainEvent('商品が注文された');
        event.aggregation('注文').note('集約に対するコメント');
        expect(event.aggregations[0].name).toBe('注文');
        expect(event.aggregations[0].notes).toContain('集約に対するコメント');
    });

    it('should display the table', () => {
        const event = domainEvent('商品が注文された');
        event.note('ドメインイベントに対するコメント');
        event.action('商品を注文する').note('アクションに対するコメント');
        event.aggregation('注文').note('集約に対するコメント');
        event.actor('顧客').note('アクタに対するコメント');
        const html = event.displayTable();
        expect(typeof html).toBe('string');
        expect(html).toContain('<table>');
    });
});