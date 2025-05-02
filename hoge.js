function domainEvent(eventName) {
    const event = {
        eventName: eventName,
        notes: [],
        actions: [],
        aggregations: [],
        actors: [],
        isPending: false,
        note: function(comment) {
            console.log(`DomainEvent Note: ${comment}`);
            this.notes.push(comment);
            return this;
        },
        markPending: function() {
            this.isPending = true;
            console.log(`DomainEvent "${this.eventName}" is marked as pending.`);
            return this;
        },
        action: function(actionName) {
            const action = {
                name: actionName,
                notes: [],
                note: function(comment) {
                    console.log(`Action Note: ${comment}`);
                    this.notes.push(comment);
                    return this;
                }
            };
            this.actions.push(action);
            return action;
        },
        policy: function(policyName) {
            this.policyName = policyName;
            this.policyNotes = [];
            this.note = function(comment) {
                console.log(`Policy Note: ${comment}`);
                this.policyNotes.push(comment);
                return this;
            };
            return this;
        },
        actor: function(actorName) {
            const actor = {
                name: actorName,
                notes: [],
                note: function(comment) {
                    console.log(`Actor Note: ${comment}`);
                    this.notes.push(comment);
                    return this;
                }
            };
            this.actors.push(actor);
            return actor;
        },
        aggregation: function(aggregationName) {
            const aggregation = {
                name: aggregationName,
                notes: [],
                note: function(comment) {
                    console.log(`Aggregation Note: ${comment}`);
                    this.notes.push(comment);
                    return this;
                }
            };
            this.aggregations.push(aggregation);
            return aggregation;
        },
        displayTable: function() {
            let html = `<table>
                <thead>
                    <tr>
                        <th>Domain Event</th>
                        <th>Notes</th>
                        <th>Pending</th>
                        <th>Actions</th>
                        <th>Aggregations</th>
                        <th>Actors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${this.eventName}</td>
                        <td>${this.notes.join('<br>')}</td>
                        <td>${this.isPending ? 'Yes' : 'No'}</td>
                        <td>${this.actions.length > 0 ? this.actions.map(action => `<div>${action.name}<br>Notes: ${action.notes.join('<br>')}</div>`).join('<br>') : ''}</td>
                        <td>${this.aggregations.length > 0 ? this.aggregations.map(aggregation => `<div>${aggregation.name}<br>Notes: ${aggregation.notes.join('<br>')}</div>`).join('<br>') : ''}</td>
                        <td>${this.actors.length > 0 ? this.actors.map(actor => `<div>${actor.name}<br>Notes: ${actor.notes.join('<br>')}</div>`).join('<br>') : ''}</td>
                    </tr>
                </tbody>
            </table>`;
            return html; // コンソールに出力する代わりに、HTMLを返す
        }
    };
    console.log(`Event: ${eventName}`);
    return event;
}

module.exports = domainEvent;
