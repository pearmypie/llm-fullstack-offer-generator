import json
import sys
import transformers
import torch
from transformers import AutoTokenizer


def get_inputs(file_name):
    with open(file_name, 'r', encoding='UTF-8') as file:
        return file.read().replace('\n', ' ')


def process_json(json_string):
    return json.loads(json_string)


def generate_response(requirements):
    model = 'meta-llama/Meta-Llama-3-8B-Instruct'
    tokenizer = AutoTokenizer.from_pretrained(model)

    pipeline = transformers.pipeline(
        'text-generation',
        model=model,
        torch_dtype=torch.float16,
        device_map='auto'
    )

    sequences = pipeline(
        f"""Solicitarea clientului: {requirements}
Structura raspunsului va fi:
I. Scopul documentului
II. Propunere structura
III. Sugestii suplimentare
IV. Preț și timp de implemtare""",
        do_sample=True,
        top_k=10,
        num_return_sequences=1,
        eos_token_id=tokenizer.eos_token_id,
        truncation=True,
        max_length=7_100
    )

    for seq in sequences:
        print(f'Result:{seq['generated_text']}')


def main():
    json_string = sys.argv[1]
    generate_response(process_json(json_string))


if __name__ == '__main__':
    main()