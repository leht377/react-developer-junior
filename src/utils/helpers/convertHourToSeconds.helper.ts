/**
 * Converts a time string in `HH:mm` or `HH:mm:ss` format to total seconds.
 *
 * @param time - A string representing the time in `HH:mm` or `HH:mm:ss` format.
 * @returns The total number of seconds corresponding to the given time.
 *
 */
const convertHourToSeconds = (time: string): number => {
  const [hh, mm, ss] = time.split(':').map(Number)
  return hh * 3600 + mm * 60 + (ss || 0) // Convert everything to seconds
}

export { convertHourToSeconds }
