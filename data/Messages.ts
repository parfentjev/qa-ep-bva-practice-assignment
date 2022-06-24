export enum Messages {
  REJECTED_NAN = 'REJECTED: The value must be an integer.',
  REJECTED_NOT_ACCEPTABLE = 'REJECTED: An integer must be >= -10000 and <= 10000, it is not stored.',
  ACCEPTED_NEGATIVE = 'ACCEPTED: Stored as a negative integer.',
  ACCEPTED_POSITIVE = 'ACCEPTED: Stored as a positive integer.',
  ACCEPTED_ZERO = 'ACCEPTED: Not stored (0).',
}
