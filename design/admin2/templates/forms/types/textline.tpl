{* Template renders view the line for text line, parameters:
- $input - textline object
- $data - attribute object conatining data (or empty object when adding new attribute)
- $input_id - id of attribute stored in database or unique id for new attribute *}

<div class="formField form-{$input.id}">
    <input type="hidden" name="formelement_{$input_id}[type]" value="{$input.id}"/>
    <p><strong>{$input.name}</strong></p>
    <p>
        {include uri="design:forms/types/elements/label.tpl" label=$data.label input_id=$input_id}
        <span class="spc">|</span>
        {include uri="design:forms/types/elements/mandatory.tpl" is_mandatory=$data.is_mandatory input_id=$input_id}
        <span class="spc">|</span>
        {include uri="design:forms/types/elements/default_text.tpl" default_value=$data.default_value input_id=$input_id}
    </p>
    <p>
        {include uri="design:forms/types/elements/validation.tpl" validators=$input.validators validator_ids=$data.validator_ids input_id=$input_id}
    </p>
    <a class="removeField">{'Remove'|i18n( 'extension/formmaker/admin' )}</a>
</div>