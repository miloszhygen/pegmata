import findTalkDateAndTime from './dateUtil';

describe('findTalkDateAndTime', () => {
  it('should return an object with dayname, starttime and endtime if time and duration is sent in', () => {
    const testDate = '2020-02-19T09:30:00.000Z';
    const testDuration = 45
    const dateResult = findTalkDateAndTime(testDate, testDuration);
    const expectedDate = {
      day: 'Wednesday',
      start: '10:30',
      end: '11:15'
    }
    expect(expectedDate).toEqual(dateResult);
  })

  it('should add 0 to hour and minutes if time is under 10', () => {
    const testDate = '2020-02-19T04:01:00.000Z';
    const testDuration = 5
    const dateResult = findTalkDateAndTime(testDate, testDuration);
    const expectedDate = {
      day: 'Wednesday',
      start: '05:01',
      end: '05:06'
    }
    expect(expectedDate).toEqual(dateResult);
  })

  it('should return null if values are wrong', () => {
    const testDate = null;
    const testDuration = 45
    const dateResult = findTalkDateAndTime(testDate, testDuration);

    expect(dateResult).toEqual(null);
  })

  it('should return day and start time if duration is not set', () => {
    const testDate = '2020-02-19T09:30:00.000Z';
    const testDuration = null
    const dateResult = findTalkDateAndTime(testDate, testDuration);
    const expectedDate = {
      day: 'Wednesday',
      start: '10:30',
      end: ''
    }
    expect(dateResult).toEqual(expectedDate);
  })
})