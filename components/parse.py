import json


f = open('geodata.json', 'r')
data = json.load(f)
f.close()


for obj in data['features']:
    del obj['properties']['scalerank']
    del obj['properties']['SUBUNIT']
    del obj['properties']['SU_DIF']
    del obj['properties']['GU_A3']
    del obj['properties']['ADM0_A3']
    del obj['properties']['SOV_A3']
    del obj['properties']['SOVEREIGNT']
    del obj['properties']['BRK_NAME']
    del obj['properties']['BRK_A3']
    del obj['properties']['BRK_GROUP']
    del obj['properties']['FORMAL_EN']
    del obj['properties']['GDP_YEAR']
    del obj['properties']['WOE_ID_EH']
    del obj['properties']['POSTAL']
    del obj['properties']['ABBREV']
    del obj['properties']['featurecla']
    del obj['properties']['NAME_SORT']
    del obj['properties']['NAME_CIAWF']
    del obj['properties']['LABELRANK']
    del obj['properties']['ADM0_DIF']
    del obj['properties']['LEVEL']
    del obj['properties']['TYPE']
    del obj['properties']['GEOU_DIF']
    del obj['properties']['BRK_DIFF']
    del obj['properties']['MAPCOLOR7']
    del obj['properties']['NAME_ALT']
    del obj['properties']['NOTE_BRK']
    del obj['properties']['NOTE_ADM0']
    del obj['properties']['FORMAL_FR']
    del obj['properties']['MAPCOLOR8']
    del obj['properties']['MAPCOLOR9']
    del obj['properties']['MAPCOLOR13']
    del obj['properties']['POP_EST']
    del obj['properties']['POP_RANK']
    del obj['properties']['GDP_MD_EST']
    del obj['properties']['POP_YEAR']
    del obj['properties']['LASTCENSUS']
    del obj['properties']['ECONOMY']
    del obj['properties']['INCOME_GRP']
    del obj['properties']['WIKIPEDIA']
    del obj['properties']['FIPS_10_']
    del obj['properties']['ISO_N3']
    del obj['properties']['UN_A3']
    del obj['properties']['WB_A2']
    del obj['properties']['WB_A3']
    del obj['properties']['WOE_ID']
    del obj['properties']['WOE_NOTE']
    del obj['properties']['ADM0_A3_IS']
    del obj['properties']['ADM0_A3_US']
    del obj['properties']['ADM0_A3_UN']
    del obj['properties']['ADM0_A3_WB']
    del obj['properties']['CONTINENT']
    del obj['properties']['REGION_UN']
    del obj['properties']['SUBREGION']
    del obj['properties']['REGION_WB']
    del obj['properties']['NAME_LEN']
    del obj['properties']['LONG_LEN']
    del obj['properties']['ABBREV_LEN']
    del obj['properties']['TINY']
    del obj['properties']['HOMEPART']
    del obj['properties']['MIN_ZOOM']
    del obj['properties']['MIN_LABEL']
    del obj['properties']['MAX_LABEL']


json_object = json.dumps(data, indent=4)

# Writing to sample.json
with open("sample.json", "w") as outfile:
    outfile.write(json_object)
