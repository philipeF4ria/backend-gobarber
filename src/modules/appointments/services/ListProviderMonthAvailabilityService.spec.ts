import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
	beforeEach(() => {

		fakeAppointmentsRepository = new FakeAppointmentsRepository();
		listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
			fakeAppointmentsRepository,
		);
	});

	it('should be able  to list the month availability from provider', async () => {
		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 8, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 9, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 10, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 11, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 12, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 13, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 14, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 15, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 16, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 30, 17, 0, 0),
		});

		await fakeAppointmentsRepository.create({
			provider_id: 'user',
			date: new Date(2020, 9, 31, 10, 0, 0),
		});

		const availability = await listProviderMonthAvailability.execute({
			provider_id: 'user',
			year: 2020,
			month: 8,
		});

		expect(availability).toEqual(expect.arrayContaining([
				{ day: 29, available: true },
				{ day: 30, available: false },
				{ day: 31, available: true },
			]),
		);
	});
});
