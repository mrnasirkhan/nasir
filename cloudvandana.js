def reverse_words(sentence):
    words = sentence.split()
    reversed_words = [word[::-1] for word in words]
    reversed_sentence = ' '.join(reversed_words)
    return reversed_sentence

# Example usage:
input_sentence = "This is a sunny day"
output_sentence = reverse_words(input_sentence)
print(output_sentence)
