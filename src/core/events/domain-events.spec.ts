import { AggregateRoot } from '../entities/aggregate-root'
import { UniqueEntityID } from '../entities/unique-entity-id'
import { DomainEvent } from './domain-event'
import { DomainEvents } from './domain-events'

class CustomAggregateCreated implements DomainEvent {
  public ocurredAt: Date
  private aggregate: CustomAggregate // eslint-disable-line

  constructor(aggregate: CustomAggregate) {
    this.aggregate = aggregate
    this.ocurredAt = new Date()
  }

  public getAggregateId(): UniqueEntityID {
    return this.aggregate.id
  }
}

class CustomAggregate extends AggregateRoot<null> {
  static create() {
    const aggregate = new CustomAggregate(null)

    aggregate.addDomainEvent(new CustomAggregateCreated(aggregate))

    return aggregate
  }
}

describe('domain events', () => {
  it('should be able to dispatch and listen to events', async () => {
    const callbackSpy = vi.fn()

    // Registering a subscriber to listen for the "CustomAggregateCreated" event
    DomainEvents.register(callbackSpy, CustomAggregateCreated.name)

    // Creating an aggregate instance WITHOUT saving it to the database
    const aggregate = CustomAggregate.create()

    // Ensuring the event was created but NOT yet dispatched
    expect(aggregate.domainEvents).toHaveLength(1)

    // Simulating the aggregate being persisted, which triggers event dispatching
    DomainEvents.dispatchEventsForAggregate(aggregate.id)

    // The subscriber listens to the event and processes the data accordingly
    expect(callbackSpy).toHaveBeenCalled()

    // Ensuring all domain events have been dispatched and cleared
    expect(aggregate.domainEvents).toHaveLength(0)
  })
})
